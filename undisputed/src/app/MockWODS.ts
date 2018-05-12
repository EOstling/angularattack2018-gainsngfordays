import { WODModel } from './WODModel';

export const MockWods: WODModel[] = [{'id': 1,
  'WOD': {
  'id': 1,
  'day': new Date('05/01/2018'),
  'type': {'id': 1, 'name': 'WOD' }
  },
'WODEntry': [{'id': 1,
'name': 'Back Squats',
'order': 'A',
'notes': 'Tempo',
'items': [ {'id': 1, 'notes': '50 air squats'}, {'id': 2, 'notes': '5x5 75% Max'} ] },
{'id': 2,
'name': 'EMOM - 10 minutes',
'order': 'B',
'notes': 'Go Heavy',
'items': [ {'id': 1, 'notes': '15 Pull-ups'}, {'id': 2, 'notes': '15 Burpees'} ]
}]
}];
