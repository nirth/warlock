import React from 'react';
import {shallow} from 'enzyme';
import Box from './Box';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(dirtyChai);
chai.use(sinonChai);

describe('Box component should', () => {
  it('exist', () => expect(Box).to.be.a('function'));

  it('be a component', () => {
    const wrapper = shallow(<Box />);
    expect(wrapper).to.not.be.undefined();
  });
});
