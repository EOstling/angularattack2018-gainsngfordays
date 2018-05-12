import { WODEntryItem } from './WODEntryItem';

export class WODEntry {
  id: number;
  name: string;
  order: string;
  notes: string;
  items: WODEntryItem[];
}
