
import React, { useState } from 'react';

function MenuRecommendationForm() {
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting', null

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('submitting');

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset(); // Clear the form
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error(data.errors.map(error => error.message).join(", "));
        } else {
          console.error("Form submission failed:", response.statusText);
        }
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Network error or form submission failed:", error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2>추천할 음식점</h2>
      <form
        action="https://formspree.io/f/xgegvdpl"
        method="POST"
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <label htmlFor="menu_item" style={{ fontSize: '1.1em', color: '#333' }}>
          추천하고 싶은 음식점을 적어주세요:
        </label>
        <input
          type="text"
          id="menu_item"
          name="menu_item"
          required
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '1em'
          }}
          placeholder="예: 일식집, 파파이스"
        />
        
        <button
          type="submit"
          disabled={submissionStatus === 'submitting'}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          {submissionStatus === 'submitting' ? '제출 중...' : '추천하기'}
        </button>

        {submissionStatus === 'success' && (
          <p style={{ color: 'green', fontWeight: 'bold' }}>메뉴 추천이 성공적으로 제출되었습니다! 감사합니다.</p>
        )}
        {submissionStatus === 'error' && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>메뉴 추천 제출에 실패했습니다. 다시 시도해 주세요.</p>
        )}
      </form>
    </div>
  );
}

export default MenuRecommendationForm;
