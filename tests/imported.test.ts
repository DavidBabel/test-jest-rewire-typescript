import { exported } from '../common/imported';
import rewire from 'rewire';

const moduleMraidInfos = rewire('../common/imported');

exported();

moduleMraidInfos.__get__('not_exported')();
