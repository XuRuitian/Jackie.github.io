import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
    // 清空表单
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('메시지가 성공적으로 보내졌습니다.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <h1>연락처</h1>
      
      <div className="contact-info">
        <p><strong>이메일:</strong> leesh914@naver.com</p>
        <p><strong>전화번호:</strong> 010-5559-****</p>
        <p><strong>주소:</strong> 동국대학교 신공학관</p>
        <p><strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/username</a></p>
      </div>

      <div className="contact-form">
        <h2>메시지 보내기</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">메시지:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="메시지를 입력하세요"
            />
          </div>

          <button type="submit" className="submit-btn">보내기</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage; 