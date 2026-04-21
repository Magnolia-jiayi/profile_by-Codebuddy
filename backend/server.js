const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Database = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// 初始化数据库
const db = new Database();
db.initializeDatabase();

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

// 获取所有数据
app.get('/api/portfolio', (req, res) => {
  try {
    const data = db.getAllData();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 更新所有数据
app.put('/api/portfolio', (req, res) => {
  try {
    const { personalInfo, education, internships, projects, skills, portfolioItems, xiaohongshuInfo, learningNotes, socialLinks } = req.body;
    db.updateAllData({
      personalInfo,
      education,
      internships,
      projects,
      skills,
      portfolioItems,
      xiaohongshuInfo,
      learningNotes,
      socialLinks,
    });
    res.json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 获取单个数据类型
app.get('/api/portfolio/:type', (req, res) => {
  try {
    const { type } = req.params;
    const data = db.getData(type);
    if (data === undefined) {
      return res.status(404).json({ success: false, error: 'Data type not found' });
    }
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 更新单个数据类型
app.put('/api/portfolio/:type', (req, res) => {
  try {
    const { type } = req.params;
    const { data } = req.body;
    db.updateData(type, data);
    res.json({ success: true, message: `${type} updated successfully` });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio API server is running on port ${PORT}`);
});

module.exports = app;
