import React, {View} from 'react-native';
import {shallow} from 'enzyme';
import Title from './Title';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe('Title component should', () => {
  it('exist', () => expect(Title).to.be.a('function'));
});
