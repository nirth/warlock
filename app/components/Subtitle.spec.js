import React from 'react-native';
import {shallow} from 'enzyme';
import Subtitle from './Subtitle';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('Subtitle component should', () => {
  it('exist', () => expect(Subtitle).to.be.a('function'));
});
