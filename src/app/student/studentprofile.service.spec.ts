import { TestBed } from '@angular/core/testing';

import { StudentprofileService } from './studentprofile.service';

describe('StudentprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentprofileService = TestBed.get(StudentprofileService);
    expect(service).toBeTruthy();
  });
});
