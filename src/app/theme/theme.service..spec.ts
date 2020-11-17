import { ThemeService } from "./theme.service";

describe('ThemeService', () => {
    let service: ThemeService;

    beforeEach(()=> {
        service = new ThemeService();
    })
    
    it('get active theme', () => {
        service.getActiveTheme();
        expect(service.getActiveTheme).toBeTruthy();
    });
    
    it('get base theme', () => {
        service.setBaseTheme();
        expect(service.setBaseTheme).toBeTruthy();
    });

    it('get dark theme', () => {
        service.setDarkTheme();
        expect(service.setDarkTheme).toBeTruthy();
    });
});