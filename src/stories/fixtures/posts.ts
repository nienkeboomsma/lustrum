const posts = {
  '01-01-1900': [
    {
      absoluteDate: '1900-01-01T01:00:00.000Z',
      timeOffset: 0,
      localDate: '1900-01-01T01:00:00.000Z',
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              { type: 'text', text: '01:00 Lorem ' },
              { type: 'text', marks: [{ type: 'bold' }], text: 'bold' },
              { type: 'text', text: ' dolor ' },
              { type: 'text', marks: [{ type: 'italic' }], text: 'italics' },
              { type: 'text', text: ' amet, ' },
              {
                type: 'text',
                marks: [{ type: 'underline' }],
                text: 'underlined',
              },
              { type: 'text', text: ' adipiscing ' },
              {
                type: 'text',
                marks: [{ type: 'strike' }],
                text: 'strikethrough',
              },
              { type: 'text', text: '. Nunc ' },
              {
                type: 'text',
                marks: [{ type: 'highlight' }],
                text: 'highlight',
              },
              { type: 'text', text: ' tortor ' },
              {
                type: 'text',
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                      target: '_blank',
                      class: null,
                    },
                  },
                ],
                text: 'someURL',
              },
              {
                type: 'text',
                text: ', vitae accumsan purus lacinia eget. Nam id purus ut leo convallis aliquam semper sit amet mauris. ',
              },
            ],
          },
        ],
      },
      id: '6568c47e099f74818bb7e234',
    },
    {
      absoluteDate: '1900-01-01T11:00:00.000Z',
      timeOffset: 0,
      localDate: '1900-01-01T11:00:00.000Z',
      content: {
        type: 'doc',
        content: [
          {
            type: 'heading',
            attrs: { level: 1 },
            content: [{ type: 'text', text: 'Heading 1' }],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '11:00 nec lobortis sem scelerisque quis. Sed ut mauris vestibulum, commodo nibh a, luctus est. Sed ornare, libero ac posuere scelerisque, mi ligula dapibus velit, nec rutrum tellus ex ac urna. Suspendisse porttitor sem id ante semper rhoncus.',
              },
            ],
          },
          {
            type: 'heading',
            attrs: { level: 2 },
            content: [{ type: 'text', text: 'heading 2' }],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Integer in metus viverra, dapibus felis vitae, dignissim ante. Aenean consequat dolor massa, in gravida purus vehicula non. Nunc massa justo, sodales eu sapien sed, tincidunt bibendum mi. ',
              },
            ],
          },
        ],
      },
      id: '6568c49a099f74818bb7e238',
    },
  ],
  '02-01-1900': [
    {
      absoluteDate: '1900-01-02T16:00:00.000Z',
      timeOffset: 0,
      localDate: '1900-01-02T16:00:00.000Z',
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '16:00 Duis vel quam varius, viverra nibh sed, elementum ex. ',
              },
            ],
          },
          {
            type: 'bulletList',
            content: [
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'this is' }],
                  },
                ],
              },
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'an unordered' }],
                  },
                ],
              },
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'list' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Mauris arcu justo, interdum in rutrum non, porttitor a nisi. Maecenas pretium suscipit risus sit amet cursus. ',
              },
            ],
          },
          {
            type: 'orderedList',
            attrs: { start: 1 },
            content: [
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'this is' }],
                  },
                ],
              },
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'an ordered' }],
                  },
                ],
              },
              {
                type: 'listItem',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'list' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'ac imperdiet lectus pellentesque. Quisque libero diam, auctor sit amet imperdiet ut, rhoncus ut mauris.',
              },
            ],
          },
        ],
      },
      id: '6568c4e0099f74818bb7e23d',
    },
  ],
  '03-01-1900': [
    {
      absoluteDate: '1900-01-03T14:00:00.000Z',
      timeOffset: 0,
      localDate: '1900-01-03T14:00:00.000Z',
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '14:00 Quisque faucibus ut mi et vehicula.',
              },
            ],
          },
        ],
      },
      id: '6568c5a8099f74818bb7e252',
    },
    {
      absoluteDate: '1900-01-03T18:00:00.000Z',
      timeOffset: 0,
      localDate: '1900-01-03T18:00:00.000Z',
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: '18:00 Aliquam blandit viverra lorem, eget interdum enim feugiat in. Donec enim tellus, facilisis vitae lobortis eget, tincidunt id eros. ',
              },
            ],
          },
          {
            type: 'blockquote',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: 'This is a quote!' }],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: 'Fusce malesuada nisi libero, non volutpat ex blandit et. Morbi blandit varius felis ut bibendum. Cras commodo metus odio, vel laoreet lacus faucibus cursus. Vivamus non nisl ullamcorper, tincidunt massa sed, dictum sapien. Here is a line 👇🏻',
              },
            ],
          },
          { type: 'horizontalRule' },
          { type: 'paragraph' },
        ],
      },
      id: '6568c520099f74818bb7e240',
    },
  ],
}

export default posts
