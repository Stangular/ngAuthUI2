import { AdminModuleModule } from './admin.module';

describe('AdminModuleModule', () => {
  let adminModuleModule: AdminModuleModule;

  beforeEach(() => {
    adminModuleModule = new AdminModuleModule();
  });

  it('should create an instance', () => {
    expect(adminModuleModule).toBeTruthy();
  });
});
