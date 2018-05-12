import { WODModel } from './WODModel';

export const MockWods: WODModel[] = [{'id': 1,
  'WOD': {
  'id': 1,
  'day': new Date('05/01/2018'),
  'type': {'id': 1, 'name': 'WOD' }
  },
'WODEntry': [{'id': 1,
'name': 'Partners split work',
'order': 'A',
'notes': '4 rounds',
'items': [ {'id': 1, 'notes': '20 Dead lifts 225/155'}, {'id': 2, 'notes': '40 Box jumps 24/20'}
, {'id': 3, 'notes': '40 Push ups'} ] },
{'id': 2,
'name': 'Rest 2 min',
'order': 'B',
'notes': '4 rounds',
'items': [ {'id': 4, 'notes': '400m run together'}, {'id': 5, 'notes': '40 RKS'}
, {'id': 6, 'notes': '40 Jumping lunges'}]
}]
},
{'id': 2,
  'WOD': {
  'id': 2,
  'day': new Date('05/01/2018'),
  'type': {'id': 2, 'name': 'uFit' }
  },
'WODEntry': [{'id': 3,
'name': 'Partners split work',
'order': 'A',
'notes': '2 rounds',
'items': [ {'id': 7, 'notes': '20 Pull up'}, {'id': 8, 'notes': '40 Box jumps'}
, {'id': 9, 'notes': '40 Push ups'} ] },
{'id': 4,
'name': 'Rest 2 min',
'order': 'B',
'notes': '2 rounds',
'items': [ {'id': 10, 'notes': '400m run together'}, {'id': 11, 'notes': '40 RKS'}
, {'id': 12, 'notes': '40 Jumping lunges'}]
}]
}];
