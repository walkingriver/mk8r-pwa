import { MkItem } from './mk-item';
import { CharacterSize } from './character-size.enum';

export interface Character extends MkItem {
    size: CharacterSize;
}
