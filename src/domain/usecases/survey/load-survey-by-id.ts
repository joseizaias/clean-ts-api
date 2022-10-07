import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveyById {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  loadById (id: string): Promise<SurveyModel>
}

/****
 *

import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}

*/
