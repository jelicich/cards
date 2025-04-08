import Energy from '@/models/Energy';
import type Power from '@/models/Power';
import CardStyle from '@/models/CardStyle';

export interface CardForm {
  evolution: number;
  name: string;
  hitPoints: number;
  energy: Energy;
  evolvesFrom?: {
    name?: string;
    image?: string;
  };
  backgroundPicture: string;
  foregroundPicture?: string;
  abilityTitle?: string;
  abilityDescription?: string;
  powers: Array<Power>;
  weakness: { energy: Energy; amount: number };
  retreat: Array<Energy>;
  artist: string;
  info: string;
  cardStyle: CardStyle;
}
