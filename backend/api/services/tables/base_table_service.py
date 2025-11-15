from abc import ABC, abstractmethod
from typing import Any, Optional, TypeVar, Generic

T = TypeVar('T')


class BaseService(ABC, Generic[T]):
    """Abstract base service class with common CRUD operations for all table services."""
    
    @abstractmethod
    def create(self, **kwargs) -> T:
        """Create a new record."""
        pass
    
    @abstractmethod
    def get_by_id(self, record_id: int) -> Optional[T]:
        """Retrieve a record by ID."""
        pass
    
    @abstractmethod
    def update(self, record: T, **kwargs) -> T:
        """Update an existing record."""
        pass
    
    def _set_attributes(self, record: T, **kwargs) -> None:
        """Helper method to set multiple attributes on a record."""
        for key, value in kwargs.items():
            setattr(record, key, value)
    
    def _save_record(self, record: T) -> None:
        """Helper method to save a record."""
        record.save()
