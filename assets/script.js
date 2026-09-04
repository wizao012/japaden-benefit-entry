(function () {
  'use strict';

  const CONFIG = {
    ZAPIER_WEBHOOK_URL: 'https://hooks.zapier.com/hooks/catch/12525485/4hgku20/',
    THANKS_PAGE: 'thanks/',
    PARAM_KEYS: [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'placement',
      'keyword',
      'matchtype',
      'gclid',
      'fbclid',
      'lpv'
    ]
  };

  window.dataLayer = window.dataLayer || [];

  function captureTrackingData() {
    try {
      const params = new URLSearchParams(window.location.search);
      CONFIG.PARAM_KEYS.forEach(function (key) {
        const input = document.getElementById('trk-' + key);
        if (input) input.value = params.get(key) || '';
      });

      const lpPath = document.getElementById('trk-lp_path');
      if (lpPath) lpPath.value = window.location.pathname || '';

      const referrer = document.getElementById('trk-referrer');
      if (referrer) referrer.value = document.referrer || '';
    } catch (error) {
      // Tracking parameters must never prevent the form from being used.
    }
  }

  function initializeLeadForm() {
    const form = document.getElementById('lead-form');
    const submitButton = document.getElementById('submit-button');
    if (!form || !submitButton) return;

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
      submitButton.innerHTML = '送信中...';

      const formData = new FormData(form);
      formData.append('submitted_at', new Date().toISOString());
      formData.append('source_url', window.location.href);

      try {
        await fetch(CONFIG.ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });

        window.dataLayer.push({ event: 'form_submit_cv' });
        window.location.href = CONFIG.THANKS_PAGE;
      } catch (error) {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
        submitButton.innerHTML = '入力内容を送信する <b>›</b>';
        window.alert('送信に失敗しました。時間をおいて再度お試しください。');
      }
    });
  }

  captureTrackingData();
  initializeLeadForm();
})();
