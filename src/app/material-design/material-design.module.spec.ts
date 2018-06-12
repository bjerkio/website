import { MaterialDesignModule } from './material-design.module';

describe('MaterialDesignModule', () => {
  let materialDesignModule: MaterialDesignModule;

  beforeEach(() => {
    materialDesignModule = new MaterialDesignModule();
  });

  it('should create an instance', () => {
    expect(materialDesignModule).toBeTruthy();
  });
});
