interface LanguageTemplate {
  language: string,
  global: {
    mainTitle: string
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