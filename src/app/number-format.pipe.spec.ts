import { TestBed } from '@angular/core/testing';
import { NumberFormatPipe } from './number-format.pipe';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import  localeEsCl  from '@angular/common/locales/es-Cl';

registerLocaleData(localeEsCl, 'es');

fdescribe('NumberFormatPipe', () => {
  let pipe: NumberFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberFormatPipe],
      providers: [
        NumberFormatPipe,
        DecimalPipe,
        { provide: LOCALE_ID, useValue: 'es'}
      ]
    });

    pipe = TestBed.inject(NumberFormatPipe);
  });

  it('should create an instance of NumberFormatPipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should show $0 if value is zero and showMoneySign is true', () => {
    const value = 0;
    const transformedValue = pipe.transform(value,true);
    expect(transformedValue).toBe('$0');
  });

  it('should show formatted value with dollar sign if value is positive and showMoneySign is true', () => {
    const value = 150000;
    const transformedValue = pipe.transform(value,true);
    expect(transformedValue).toEqual('$150.000');
  });

  it('should show minus sign before dolar sign if value is negative and showMoneySign is true', ()=> {
    const value = -15000;
    const transformedValue = pipe.transform(value,true);
    expect(transformedValue).toEqual('-$15.000');
  });

  it('show formatted value without money sign for positive numbers', () => {
    const value = 1500000;
    const transformedValue = pipe.transform(value,false);
    expect(transformedValue).toEqual('1.500.000');
  });

  it('show formatted value without money sign for negative numbers', () => {
    const value = -1500000;
    const transformedValue = pipe.transform(value,false);
    expect(transformedValue).toEqual('-1.500.000');
  });

});
