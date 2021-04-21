import {Component} from "react";

const comicsData = [
  {
    title: "Uncanny X-Men (1963) #452",
    description: "CHASING HELLFIRE\" PART 1 (OF 3)\r\nWhile on assignment to track down missing teammate Sage, the X-Men discover more than they bargained for-the birth of a newer and deadlier Hellfire Club.",
    images: [
      {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/591db92ea22b5",
        "extension": "jpg"
      }
    ],
    characters: {
      items: [
        {
          name: "X-Men"
        }
      ]
    }
  },
  {
    title: "Mystique (2003) #21",
    description: "\"QUIET\" PART 2 (OF 5)\r<br>Mystique is caught between two masters-one, mutant activist Charles Xavier; the other, the mysterious Quiet Man. Now, the time has come when she can no longer serve both!\r<br>",
    images: [
      {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/564b9ae8a2e31",
        "extension": "jpg"
      },
      {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6b576ce7e3",
        "extension": "jpg"
      }
    ],
    characters: {
      items: [
        {
          name: "Mystique"
        }
      ]
    }
  },
  {
    title: "Art of Marvel Vol. 2 (Hardcover)",
    description: "This brand-new deluxe hardcover is a follow-up to the best-selling ART OF MARVEL VOL. I. Featuring more than 100 illustrations by the comic book industry's hottest artists and painters, this new volume features more breathtaking looks at your favorite Marvel heroes and villains, including Spider-Man, the X-Men, the Hulk, Daredevil, Elektra, the Punisher, the Avengers and many, many more! A perfect companion piece to ART OF MARVEL VOL. I, this deluxe coffee-table book showcases the rich artistry of the Marvel Universe like never before!",
    images: [
      {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bc6b56815504",
        "extension": "jpg"
      }
    ],
    characters: {
      items: []
    }
  }
]

function getComics() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comicsData);
    }, 1000)
  })
}

export default class Home extends Component {
  state = {
    comics: []
  };

  async componentDidMount() {
    const responseComics = await getComics();
    this.setState({ comics: responseComics });
  }

  render() {
    const { comics } = this.state;
    return (
      <div>
        <h1>Comics</h1>
        <ul>
          <li>
            {comics.map((item) => (
              <div>
                <span>{item.title}</span>
                <img style={{height: '100px', width: '100px'}} src={item.images[0].path + '/detail.' + item.images[0].extension} />
              </div>
            ))}
          </li>
        </ul>
        <pre>{JSON.stringify(comics, null, 2)}</pre>
      </div>
    )
  }
}
