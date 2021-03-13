import IParserMailTemplateDTO from '../dtos/IParserMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ template }: IParserMailTemplateDTO): Promise<string> {
        return template;
    }
}

export default FakeMailTemplateProvider;