import React, {Text} from 'react-native';
import {shallow} from 'enzyme';
import LinkButton from './LinkButton';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('LinkButton component should', () => {
  it('exist', () => expect(LinkButton).to.be.a('function'));

  it('render text label when it set as a child of a component', () => {
    const wrapper = shallow(<LinkButton>Load Results</LinkButton>);
    expect(wrapper).to.contain(<Text>Load Results</Text>);
  });

  it('render text label when it set as a label property', () => {
    const wrapper = shallow(<LinkButton label="Submit Results" />);
    expect(wrapper).to.contain(<Text>Submit Results</Text>);
  });
});
