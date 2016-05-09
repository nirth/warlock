import React, {View} from 'react-native';
import {shallow} from 'enzyme';
import HBox from './HBox';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('HBox component should', () => {
  it('exist', () => expect(HBox).to.be.a('function'));
});
