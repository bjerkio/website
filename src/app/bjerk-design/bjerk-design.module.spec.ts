import { BjerkDesignModule } from './bjerk-design.module';

describe('BjerkDesignModule', () => {
  let designComponentsModule: BjerkDesignModule;

  beforeEach(() => {
    designComponentsModule = new BjerkDesignModule();
  });

  it('should create an instance', () => {
    expect(designComponentsModule).toBeTruthy();
  });
});
