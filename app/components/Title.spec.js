import React from 'react-native';
import {shallow} from 'enzyme';
import Title from './Title';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(dirtyChai);
chai.use(sinonChai);

describe('Title component should', () => {
  it('exist', () => expect(Title).to.be.a('function'));

  it('be a component', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).to.not.be.undefined();

    // TODO: Fix dirty-chai to have expect(wrapper).to.be.defined();
  });
});
