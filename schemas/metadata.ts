import {defineType, Rule} from 'sanity'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        slugify(input: string): string {
          return input.toLowerCase().replaceAll(/\s+/g, '-').slice(0, 200)
        },
        source: 'title',
      },
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      validation(rule: Rule): Rule {
        return rule.required()
      },
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}],
        },
      ],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'reference',
      validation(rule: Rule): Rule {
        return rule.required()
      },
      to: [{type: 'featuredImage'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      validation(rule: Rule): Rule {
        return rule.required()
      },
      of: [{type: 'string'}],
      options: {
        list: [
          {title: "Things I'm Thinking About", value: 'thinkingAbout'},
          {
            title: "Things I'm Working On",
            value: 'workingOn',
          },
          {title: 'Some Designy Things', value: 'design'},
          {title: 'Learn Web Dev', value: 'courseReview'},
        ],
      },
    },
  ],
})
