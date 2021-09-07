import React from 'react'
import { Octocat } from './components/Octocats'

export function App() {
  return (
    <body>
      <nav>
        <div>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="40"
          />
          <a className="boldedstyle" href="https://octodex.github.com">
            {' '}
            Octodex{' '}
          </a>
          <a href="https://octodex.github.com">Home</a>
          <a href="https://octodex.github.com/faq/">FAQ</a>
          <a href="https://octodex.github.com/atom.xml">RSS</a>
        </div>
        <div className="end">
          <a href="https://twitter.com/github">Follow us on Twitter</a>
          <a className="backtogithub" href="https://github.com">
            Back to Github.com
          </a>
        </div>
      </nav>
      <main>
        <ul>
          <Octocat
            image="https://octodex.github.com//images/NUX_Octodex.gif"
            number={153}
            name="NUXtocat"
            creator="https://github.com/cameronfoxly.png"
          />
          <Octocat
            image="https://octodex.github.com//images/yogitocat.png"
            number={152}
            name="Yogitocat"
            creator="https://github.com/johncreek.png"
          />

          <Octocat
            image="https://octodex.github.com//images/mona-the-rivetertocat.png"
            number={151}
            name="Mona the Rivertocat"
            creator="https://github.com/johncreek.png"
          />
          <Octocat
            image="https://octodex.github.com//images/manufacturetocat.png"
            number={150}
            name="Manufacturetocat"
            creator="https://github.com/heyhayhay.png"
          />
          <Octocat
            image="https://octodex.github.com//images/OctoAsians_dex_Full.png"
            number={149}
            name="OctoAsians"
            creator="https://github.com/cameronfoxly.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Octoqueer.png"
            number={148}
            name="Octoqueer"
            creator="https://github.com/cameronfoxly.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            number={147}
            name="Terracottocat"
            creator="https://github.com/chubbmo.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Octogatos.png"
            number={146}
            name="Octogatos"
            creator="https://github.com/cameronfoxly.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Adacats.png"
            number={145}
            name="Adacats"
            creator="https://github.com/cameronfoxly.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Fintechtocat.png"
            number={144}
            name="Fintechtocat"
            creator="https://github.com/ceciliorz.png"
          />
          <Octocat
            image="https://octodex.github.com//images/Brennatocat.png"
            number={143}
            name="Brennatocat"
            creator="https://github.com/johncreek.png"
          />
          <Octocat
            image="https://octodex.github.com//images/filmtocats.png"
            number={142}
            name="Filmtocats"
            creator="https://github.com/heyhayhay.png"
          />
        </ul>
      </main>
      <footer>© 2013 – 2021 GitHub, Inc. All rights reserved.</footer>
      <script type="module" src="/src/main.ts"></script>
    </body>
  )
}
