import React from 'react';
import {shallow} from 'enzyme';
import HBox from './HBox';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(dirtyChai);
chai.use(sinonChai);

describe('HBox component should', () => {
  it('exist', () => expect(HBox).to.be.a('function'));

  it('be a component', () => {
    const wrapper = shallow(<HBox />);
    expect(wrapper).to.not.be.undefined();
  });
});
