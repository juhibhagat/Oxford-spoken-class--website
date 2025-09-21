  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      includedLanguages: 'en,hi,ta,te,ml,gu,bn,mr,pa,ur',
      autoDisplay: false
    }, 'google_translate_element');
  }