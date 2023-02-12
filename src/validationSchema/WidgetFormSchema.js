import * as Yup from 'yup'
import { TextTemplate } from '../constants/TextTemplate'

export const WidgetFormSchema = Yup.object().shape({
  country: Yup.string()
    .required(TextTemplate.errorMsg.countryRequired),
  headerText: Yup.string()
    .min(2, TextTemplate.errorMsg.tooLong)
    .max(20, TextTemplate.errorMsg.tooLong)
    .required(TextTemplate.errorMsg.headerTextRequired),
  headerBackColor: Yup.string()
    .required(TextTemplate.errorMsg.headerBackColorRequired),
  headerTextColor: Yup.string()
    .required(TextTemplate.errorMsg.headerTextColorRequired),
  footerText: Yup.string()
    .min(2, TextTemplate.errorMsg.tooLong)
    .max(20, TextTemplate.errorMsg.tooLong)
    .required(TextTemplate.errorMsg.footerTextRequired),
  footerBackColor: Yup.string()
    .required(TextTemplate.errorMsg.footerBackColorRequired),
  footerTextColor: Yup.string()
    .required(TextTemplate.errorMsg.footerTextColorRequired),
  width: Yup.number()
    .required(TextTemplate.errorMsg.widthRequired),
  height: Yup.number()
    .required(TextTemplate.errorMsg.heightRequired),

})
