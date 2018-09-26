import React from 'react';
import { Wrapper, Section } from './styles';
import { Link } from '@reach/router';

class Info extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Link to="/">← back to gallery</Link>
        <Section>
          <h2>Pixel Gallery is a peer-to-peer gallery for pixel art.</h2>

          <p>Pixel Galleries have three main features:</p>
          <ol>
            <li>View artwork</li>
            <li>
              Create artwork (every pixel gallery comes with a canvas where you
              can create your own art)
            </li>
            <li>
              Display other peoples' artwork in <em>your</em> gallery.
            </li>
          </ol>

          <p>
            The original gallery is viewable{' '}
            <a href="dat://pixel-gallery.hashbase.io/">here</a>.
          </p>
        </Section>
        <Section>
          <h2>
            What makes this gallery peer-to-peer, and why is that important?
          </h2>

          <p>
            Artworks are saved as files to the user's computer (more below),
            rather than to a centralized server. If you are using a peer-to-peer
            browser, like Beaker Browser, you can do some really neat things
            like:
          </p>

          <ul>
            <li>
              create a copy of that person's gallery and modify to your own
              liking
            </li>
            <li>add a piece of their artwork to your own gallery</li>
          </ul>

          <p>
            All of this happens without any third-party or server being
            involved. You interact directly with the other person and their
            gallery.
          </p>

          <p>
            It's helpful to understand the concepts of 'seeding' and 'peers'
            when thinking about peer-to-peer experiments on the web. From
            wikipedia:{' '}
          </p>

          <blockquote>
            <p>
              In computing and specifically peer-to-peer file sharing, seeding
              is the uploading of already downloaded content for others to
              download from. A peer, a computer that is connected to the
              network, becomes a seed when having acquired the entire set of
              data it tries to download. This data consists out of small parts
              so that seeds can effectively share their content with other
              peers, handing out the missing pieces. A peer deliberately chooses
              to become a seed by leaving the upload task active when content is
              downloaded. This means that there should be motivation to seed.
              The opposite of a seed is a leech, a peer that downloads more than
              they upload.
            </p>
          </blockquote>

          <p>
            When you add (seed) someones's artwork to your pixel gallery, you
            effectively become a peer. Pixel gallery takes that a step further
            though. Instead of only keeping that data available for others, you
            display the data (the artwork) as an extension of your
            self/style/tastes. This is like the peer-to-peer version of a
            reblog/retweet.
          </p>
        </Section>
        <Section>
          <h2>How does it work?</h2>
          <p>
            When you create a piece of artwork, it is saved as a .json file
            using the proposed PXON standard created by Jenn Schiffer. Here's
            how she describes PXON.
          </p>

          <blockquote>
            <p>
              PXON (pronounced like "picks on" as in "I hate it that Jenn always
              'picks on' me."1) is a proposed standard, which no one needs or
              even asked for, of the representation of pixel art using JSON and
              properties of the Exif RDF schema. It provides the means for both
              lightweight data-interchange and the object-oriented creation of
              pixel art.
            </p>
          </blockquote>

          <p>
            Read more about PXON <a href="https://jennmoney.biz/pxon/">here</a>.
          </p>

          <p>
            When you would like to add a piece of artwork to your gallery, that
            .json file is copied to your computer. You now have a copy of the
            artwork, with all of the original attribution and data.
          </p>
        </Section>
        <Section>
          <h2>Getting Started</h2>

          <ol>
            <li>
              Download <a href="https://beakerbrowser.com/">Beaker Browser</a>
            </li>
            <li>
              Visit the original gallery:{' '}
              <a href="dat://pixel-gallery.hashbase.io/">
                dat://pixel-gallery.hashbase.io/
              </a>
              , in Beaker Browser.
            </li>
            <li>Click the button "create your own pixel-gallery"</li>
            <li>
              You've now created your own pixel-gallery! Since this is{' '}
              <em>your</em> gallery, you'll see some special controls. You can
              now delete any artwork in your gallery, add others' artwork, or
              visit your canvas and create some of your own art.
            </li>
            <li>
              To add someone else's art to your gallery:{' '}
              <ul>
                <li>Visit their gallery</li>
                <li>Find the artwork you would like to put in your gallery</li>
                <li>Click the button that says "Add to your gallery"</li>
                <li>Copy the artwork address in the input box</li>
                <li>Navigate back to your gallery</li>
                <li>
                  Paste the artwork address in your "Add artwork to your
                  gallery" box and press "Submit"
                </li>
                <li>Done! Now you are hosting someone else's art.</li>
              </ul>
            </li>
          </ol>

          <p />
        </Section>
        <Section>
          <p>
            Pixel Gallery is a project by{' '}
            <a href="http://nickbytes.com">Nick Beattie</a>.<br />
            You can view the code for this project{' '}
            <a href="https://github.com/dumblr/pixel-gallery">here</a>.
          </p>
        </Section>
      </Wrapper>
    );
  }
}

export default Info;
