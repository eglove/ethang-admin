import {defineType, Rule} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
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
