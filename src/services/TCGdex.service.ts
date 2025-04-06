export default class TCGdexService {
  private tcg: TCGdex;

  constructor(language: SupportedLanguages) {
    this.tcg = new TCGdex(language);
  }

  async getCardList() {
    try {
      return await this.tcg.fetch('cards');
    } catch(e) {
      // TODO: handle error
      console.error('Service error:', e);
    }
  }

  async getCard(card: string) {
    try {
      return await this.tcg.fetch('cards', card);
    } catch(e) {
      // TODO: handle error
      console.error('Service error:', e);
    }
  }
}
