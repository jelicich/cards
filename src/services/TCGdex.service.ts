declare class TCGdex {
  constructor(language: string); // or whatever the constructor expects
  fetch(endpoint: string, param?: string): Promise<unknown>;
}
export default class TCGdexService {
  private tcg: TCGdex;

  constructor(language: string) {
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
