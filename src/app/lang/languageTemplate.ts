interface LanguageTemplate {
  language: string,
  global: {
    mainTitle: string,
    languageOption: string
  },
  pages: {
    home: {
      name: string
    },
    calendar: {
      name: string
    }
  }
}

export type { LanguageTemplate }