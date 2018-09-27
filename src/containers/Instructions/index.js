import React from 'react';
import { Wrapper, Section } from './styles';
import { Link } from '@reach/router';

class Instructions extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Section>
          <Link to="/">← back to gallery</Link>
        </Section>
        <Section>
          <h2>Using pixel-gallery</h2>
          <p>
            You probably ended up on this page because browser doesn't support
            the features needed to create your own pixel-gallery.
          </p>
          <p>
            pixel-gallery is built on a technology called <em>Dat</em>. Dat is a
            new p2p hypermedia protocol. It provides public-key-addressed file
            archives which can be synced securely and browsed on-demand. You can
            read more about Dat <a href="https://datproject.org/">here</a>.
          </p>
          <p>
            Currently, Dat is only support in{' '}
            <a href="http://beakerbrowser.com">Beaker Browser</a>, though other
            browsers are considering support.
          </p>
          <p>
            By downloading <a href="http://beakerbrowser.com">Beaker Browser</a>
            , you will be able to create your own gallery and artworks.
          </p>
          <p>
            Learn more about how pixel-gallery works{' '}
            <Link to="/info">here</Link>.
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
                <li>Visit their gallery in Beaker Browser</li>
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
      </Wrapper>
    );
  }
}

export default Instructions;
