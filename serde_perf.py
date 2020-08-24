from abc import ABC, abstractmethod
from typing import Union


class SerdePerf(ABC):
    @abstractmethod
    def serialize(self, obj: object):
        pass

    @abstractmethod
    def deserialize(self, jsn: Union[bytes, str]):
        pass

    @property
    @abstractmethod
    def name(self):
        pass

    @property
    @abstractmethod
    def module(self):
        pass

    @property
    def name_with_version(self):
        return "{} {}".format(self.name, self.module.__version__)
