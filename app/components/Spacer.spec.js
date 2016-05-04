import React, {View} from 'react-native';
import {shallow} from 'enzyme';
import Spacer from './Spacer';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('Spacer component should', () => {
  it('exist', () => expect(Spacer).to.be.a('function'));

  it('be a component', () => {
    const wrapper = shallow(<Spacer />);
    expect(wrapper).to.contain(<View style={{flex: 1}} />);
  });
});
