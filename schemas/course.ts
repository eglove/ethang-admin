import {defineType, Rule} from 'sanity'
import {orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'isRecommended',
      title: 'Recommended',
      type: 'boolean',
      validation(rule: Rule): Rule {
        return rule.required()
      },
    },
    {
      hidden: true,
      name: 'orderRank',
      title: 'Order',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
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
      name: 'publisher',
      title: 'Publisher',
      type: 'reference',
      validation(rule: Rule): Rule {
        return rule.required()
      },
      to: [{type: 'publisher'}],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      validation(rule: Rule): Rule {
        return rule.required()
      },
      of: [
        {
          type: 'url',
        },
      ],
    },
  ],
  orderings: [orderRankOrdering],
})
