import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import {textField} from './Utils';

chai.use(dirtyChai);
chai.use(sinonChai);

describe(`Utility decorator textField bootstraps components,
that render text for styling and i18n, and should`, () => {
  it('be a function that accepts one argument', () => {
    expect(textField).to.be.a('function');
    expect(textField.length).to.equal(1);
  });
  
  it('inject prop types into component that will help it render and translate text', () => {
    @textField
    class Mate {
      static propTypes = {
        label: 'string',
      }
      
      static defaultProps = {
        label: 'Hello',
      }
    }
    
    const {propTypes} = Mate;
    
    expect(propTypes).to.not.be.undefined();
    expect(propTypes.label).to.not.be.undefined();
    expect(propTypes.date).to.not.be.undefined();
    expect(propTypes.time).to.not.be.undefined();
  });
  
  it('inject default prop when they already exist', () => {
    @textField
    class Tea {
      static propTypes = {
        label: 'string',
      }
      
      static defaultProps = {
        label: 'Hello',
      }
    }
    
    const {defaultProps} = Tea;
    
    expect(defaultProps).to.not.be.undefined();
    expect(defaultProps.label).to.equal('Hello');
    expect(defaultProps.date).to.equal(false);
    expect(defaultProps.time).to.equal(false);
  });
  
  it('inject default props and prop types when they don‘t exist', () => {
    @textField
    class Coffee {}
    
    const {propTypes, defaultProps} = Coffee;
    
    expect(propTypes).to.not.be.undefined();
    expect(propTypes.date).to.not.be.undefined();
    expect(propTypes.time).to.not.be.undefined();
    
    expect(defaultProps).to.not.be.undefined();
    expect(defaultProps.date).to.equal(false);
    expect(defaultProps.time).to.equal(false);
  });
  
  it('throw an error if one of the properties to be injected already exists', () => {
    expect(() => {
      @textField
      class Piccino {
        static propTypes = {
          date: 'bool',
        };
      }  
    }).to.throw();
  });
});
