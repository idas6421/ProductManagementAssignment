import { RegisterState } from "./register-reducer";
import { registerSelector } from './register-selector';

describe('register-selector', () => {    
    it('registerSelector should return register state', () => {
        const state: RegisterState = {
            isRegistered: false,
            user: null,
            token : null,
            message : null
          };
        expect(registerSelector.projector(state)).toBe(state);
    });
});
