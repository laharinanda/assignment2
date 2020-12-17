var config = {
    style: 'mapbox://styles/laharinanda/ckih27j6f2epi1ao74wla2k05',
    accessToken: 'pk.eyJ1IjoibGFoYXJpbmFuZGEiLCJhIjoiY2tpbGJuMnp0MDFwaTJzbzVna2NyMnV0cyJ9.AU5ROhlzVkW8UuPHQ4xccQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    mapAnimation: 'flyTo',
    title: 'Bhubaneswar Biryani Blues',
    subtitle: 'Bhubaneswar is the capital of Biryani, despite being a stranger to the creation of the dish. What's your favorite place to eat biryani?',
    byline: 'By a Biryani Glutton',

    chapters: [
      {
          id: 'all-biryani',
          alignment: 'left',
          title: 'Biryani Blues in Bhubaneswar',
          description: 'Bhubaneswar is home to hundreds of biryani stores. The smell of spiced rice and clay oven-cooked meat can be found on almost every street corner in the city. Although the city may not be where the meaty delicacy was first created, it is now easily the capital of biryani.',
          location: {
            center: [85.83481, 20.26822],
            zoom: 12.80,
            pitch: 3.50,
            bearing: -51.20
          },
          onChapterEnter: [
              {
              layer: 'Overall',
              opacity: 1,
              duration: 500
              }
          ],
          onChapterExit: [
              {
              layer: 'Overall',
              opacity: 1
              }
          ]
      },
      {
            id: 'biryani-fav-1',
            alignment: 'left',
            title: 'Tandoori Hut',
            image: './path/to/image/source.png',
            description: 'This restaurant is famous in downtown Bhubaneswar for its spicy chicken tandoori biryani. All biryani here is freshly cooked and packed in handis, or earthen pots. The restaurant also serves rolls and tandoori meats.',
            location: {
              center: [85.80290, 20.27539],
              zoom: 14.80,
              pitch: 60.00,
              bearing: 79.20
            },
            onChapterEnter: [
                {
                layer: 'Tandoori Hut',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'Tandoori Hut',
                opacity: 1
                }
            ]
        },
        {
            id: 'all-biryani',
            alignment: 'left',
            title: 'Biryani Blues in Bhubaneswar',
            image: './path/to/image/source.png',
            description: 'On the opposite side of the city, there are more stores for biryani, scattered on street corners, next to sweet shops, but mostly outside hospitals. This is ironic given hospitals advocate healthy eating.',
            location: {
              center: [85.83481, 20.26822],
              zoom: 12.80,
              pitch: 3.50,
              bearing: -51.20
            },
            onChapterEnter: [
                {
                layer: 'Overall',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'Overall',
                opacity: 1
                }
            ]
        },
        {
            id: 'Dhaka-biryani',
            alignment: 'left',
            title: 'Dhaka Biryani',
            image: './images/dhakabiryani.jpg',
            description: 'This biryani shop is more a stall than a dine-in restaurant. Every afternoon, two employees set up a stall with giant utensils with rice, boiled eggs, chicken, mutton and a simmering pan of Dhakai chicken curry. Dhakai biryani is famous for its raw, fast-cooked spices.',
            location: {
              center: [85.81416, 20.32183],
              zoom: 15.80,
              pitch: 52.00,
              bearing: 4.00
            },
            onChapterEnter: [
              {
              layer: 'Dhaka Biryani',
              opacity: 1,
              duration: 500
              }
            ],
            onChapterExit: [
              {
              layer: 'Dhaka Biryani',
              opacity: 1,
              duration: 500
              }
            ]
        },
        {
            id: 'bbk',
            alignment: 'left',
            title: 'Biryani by Kilo',
            image: './images/bbk.jpg',
            description: 'Yet, not all biryani shops around town are small pop-ups. Just like restaurants are accessible to people based on their income, biryani is also created for different social strata. Biryani by Kilo is a high-end biryani shop, famous for its mutton hyderabadi biryani and kathal (jackfruit) biryani. The chain has stores all over India and sells biryani in half-kilo or one kilo portions only. Biryani here is served with green chilly curry, or salan.',
            location: {
              center: [85.82422, 20.35353],
              zoom: 17.80,
              pitch: 60.00,
              bearing: -72.00
            },
            onChapterEnter: [
                {
                layer: 'Overall',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'Overall',
                opacity: 1
                }
            ]
        },
        {
            id: 'all-biryani',
            alignment: 'left',
            title: 'Biryani Blues in Bhubaneswar',
            image: './path/to/image/source.png',
            description: 'And that sums up three of the most popular biryani restaurants in Bhubaneswar.',
            location: {
              center: [85.83481, 20.26822],
              zoom: 12.80,
              pitch: 3.50,
              bearing: -51.20
            },
            onChapterEnter: [
                {
                layer: 'Overall',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'Overall',
                opacity: 1
                }
            ]
        },

    ]
};
