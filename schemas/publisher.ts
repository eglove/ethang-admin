import {defineType, Rule} from 'sanity'

export default defineType({
  name: 'publisher',
  title: 'Publisher',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
  ],
})
