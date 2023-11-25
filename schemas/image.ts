import {defineType, Rule} from 'sanity'

export default defineType({
  name: 'featuredImage',
  title: 'Image',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
  ],
})
