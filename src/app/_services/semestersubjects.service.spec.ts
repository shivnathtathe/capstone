import { TestBed } from '@angular/core/testing';

import { SemestersubjectsService } from './semestersubjects.service';

describe('SemestersubjectsService', () => {
  let service: SemestersubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestersubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
