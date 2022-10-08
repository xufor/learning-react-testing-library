const mockResponse = {
  data: {
    results: [
      {
        email: 'dani.fernandes@example.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/62.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg',
        },
        name: {
          title: 'Ms',
          first: 'Dâni',
          last: 'Fernandes',
        },
        login: {
          uuid: '36b0cb90-a8c5-4c2c-b04e-0c9fa288c77f',
          username: 'tinybear805',
          password: 'divx1',
          salt: 'IXuUjUTa',
          md5: '6c88c6bbfff6dc3c8246375efb5ed6a0',
          sha1: 'fdd8f5f9f5257fd366a0eebdf2e564719d39648a',
          sha256:
            '42deabde4f2382b55e28560ab14fad3a0cd0c7cbbb46dd5c96136cc876473738',
        },
      },
      {
        email: 'filip.bertrand@example.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/10.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/10.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/10.jpg',
        },
        name: {
          title: 'Monsieur',
          first: 'Filip',
          last: 'Bertrand',
        },
        login: {
          uuid: 'bed74580-f93f-4089-a356-77b2541246f9',
          username: 'whiteduck719',
          password: 'skyhawk',
          salt: 'HImLOx4k',
          md5: '140af0d68048fa7ad5f413851b6f805f',
          sha1: 'd1e5a97cd442c40ad788cb4bfe959801cf7f9379',
          sha256:
            'c043d5774d5df2f718383a9c16632b8700be04d510358494af9cd652cf9c43cd',
        },
      },
      {
        email: 'valdemar.kristensen@example.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/38.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
        },
        name: {
          title: 'Mr',
          first: 'Valdemar',
          last: 'Kristensen',
        },
        login: {
          uuid: '839a5e2d-f3b3-431c-8f6d-0c264bf85e9d',
          username: 'smallrabbit753',
          password: 'farside',
          salt: 'jlSp3hzN',
          md5: '848af6edf4c973d96186a3c739cccd1b',
          sha1: 'a4428ec8612561250604f9c57bfce4ca4f4921ec',
          sha256:
            'e4aa56baca5294d7ad6a9e778f1052af4bf91f38b1c5c77f831366c5e1ca6eef',
        },
      },
      {
        email: 'umit.cevik@example.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/33.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg',
        },
        name: {
          title: 'Mr',
          first: 'Ümit',
          last: 'Çevik',
        },
        login: {
          uuid: 'b6d0498b-46f5-471c-9cb2-2b4e26a5ccb0',
          username: 'purplelion632',
          password: 'corvet07',
          salt: 'Msln9IX5',
          md5: '7265bf87881445036b9e267fa02354b9',
          sha1: 'ac007b87f1d5d8cab942a7967d98db07820105a0',
          sha256:
            '486836007355edf4a164c108140c1b2eade148e3e89d2fc74a0be0e0a7c01119',
        },
      },
      {
        email: 'rudra.nair@example.com',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/30.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/30.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/30.jpg',
        },
        name: {
          title: 'Mr',
          first: 'Rudra',
          last: 'Nair',
        },
        login: {
          uuid: '9f5e3f65-5c9a-4bab-abe8-9e4fef3fa269',
          username: 'blackbutterfly204',
          password: 'marius',
          salt: '0Q7rJcwg',
          md5: '539ba6c17ca6e995c1dded4734c9539e',
          sha1: '917aa7b452877427e7d6beb9ebcd05872c577e4b',
          sha256:
            '61358bcc32d3d3e8313573be3ecc7f6571c95d33c80297802e965d07000b0f75',
        },
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse)
};
