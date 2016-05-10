import React from 'react-native';
import {shallow} from 'enzyme';
import VBox from './VBox';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('VBox component should', () => {
  it('exist', () => expect(VBox).to.be.a('function'));
});
