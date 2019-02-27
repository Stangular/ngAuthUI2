import { PublicModule } from './public.module';

describe('PublicModuleModule', () => {
  let publicModule: PublicModule;

  beforeEach(() => {
    publicModule = new PublicModule();
  });

  it('should create an instance', () => {
    expect(publicModule).toBeTruthy();
  });
});
