export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
      slug: 'slug',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productTitle',
        maxLength: 96,
      },
    },
    {
      name: 'productPrice',
      title: 'Product Price (R)',
      type: 'number',
    },
    {
      name: 'productColor',
      title: 'Product Color',
      type: 'string'
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'string'
    },
    {
      name: 'vendor',
      type: 'object',
      fields: [
        {
          title: 'Vendor',
          name: 'Vendor',
          type: 'reference',
          to: [{type: 'vendor'}]
        }
      ]
    },
    {
      name: 'category',
      type: 'object',
      fields: [
        {
          title: 'Product Category',
          name: 'productCategory',
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'productTitle',
      media: 'productImage',
    },
  },
}
