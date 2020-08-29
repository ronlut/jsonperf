from abc import ABCMeta, abstractmethod

import six


@six.add_metaclass(ABCMeta)
class SerdePerf:
    @abstractmethod
    def serialize(self, obj):
        # type: (object) -> None
        pass

    @abstractmethod
    def deserialize(self, jsn):
        # type: ([bytes, str]) -> None
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
    def version(self):
        return self.module.__version__

    @property
    def name_with_version(self):
        return "{} {}".format(self.name, self.version)
